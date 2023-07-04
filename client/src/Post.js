export default function Post() {
    return(
        <div className='post'>
        <div className='image'>
          <img src='https://techcrunch.com/wp-content/uploads/2023/05/elon-musk-twitter-2023-b.jpg?w=850&h=492&crop=1' alt='img'/>
        </div>
        <div className='texts'>
          <h2>Only verified users will be able to access TweetDeck after 30 days</h2>
          <p className='info'>
            <a className='author'>Aviraj Bhattacharya</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className='summary'>After swathes of users were unable to access parts of TweetDeck over the last few days, Twitter started rolling out a new version of the web app to users Monday.</p>
        </div>      
      </div>
    );
}