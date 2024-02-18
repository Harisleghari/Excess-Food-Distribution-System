/* eslint-disable no-lone-blocks */
import "./loadmore.css";

const LoadMore = (props) => {
  return (
    <div className="load-more-div-a load-more-div-b">
      {props.isCompleted ? (
        <button
          onClick={props.loadMore}
          type="button"
          className="load-more-btn-a load-more-btn-b disabled"
        >
          That's It
        </button>
      ) : (
        <button
          onClick={props.loadMore}
          type="button"
          className="load-more-btn-a load-more-btn-b"
        >
          <span className="load-more-span-a load-more-span-b">Show More ...</span>
        </button>
      )}
    </div>
  );
};

export default LoadMore;

{
  /* <button className="load-more-btn-a load-more-btn-b" type="submit">
        <span className="load-more-span-a load-more-span-b">
          Load more
        </span>
      </button> */
}
