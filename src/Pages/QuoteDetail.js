import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/hooks/use-http";
import { getSingleQuote } from "../lib/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const {sendRequest, status, data: loadedQuotes, error} = useHttp(getSingleQuote, true);
  const {quoteId} = params;
  useEffect(() => {
    sendRequest(quoteId);
  },[sendRequest, quoteId]);

  if(status === "pending"){
    return(
        <div className="centered">
            <LoadingSpinner />
        </div>
    );
}

if(error){
    return(
        <p className="centered focused">{error}</p>
    );
}

  if (!loadedQuotes.text) {
    return <p>No Quote Found</p>;
  }
  return (
    <React.Fragment>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link to={`/quotes/${params.quoteId}/comments`} className="btn--flat">
            Add Comment
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
