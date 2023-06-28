

function HistoryCard ({workoutList}) {
    const[duration,time, date, exercises] =workoutList
    return (
        <div className = "history_card">
            <div className = "historycard__body">
                <h1>History</h1>
            </div>
            <div className="card__content">
          <div className="card__title">{duration}</div>
          {/* //<p className="card__text">  {   seeQuote ? bio :quote }    </p> */}
          <div className="card__detail">
            <p>{exercises}</p>
            <p>
            </p>
          </div>
        </div>
      </div>
    )
}

export default HistoryCard