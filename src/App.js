import React from 'react';

function App() {
  return (
    <div className="h-full bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div class="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-12">
          <header className="flex pt-6">
            <h1 className="font-serif text-4xl font-extrabold tracking-wide leading-tight">
              The<br />Speaking<br />Library
            </h1>
            <div className="ml-auto flex flex-col">
              <div className="self-end">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://speakinglibrary.com&t=The Speaking Library" target="_blank" rel="nofollow" class="mr-2"><i
                  class="fa fa-facebook p-2"></i></a>

                <a href="https://twitter.com/intent/tweet?text=The Speaking Library offers a free weekly audio book! https://speakinglibrary.com"
                  target="_blank" rel="nofollow" class="mr-2"><i class="fa fa-twitter p-2"></i></a>

                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://speakinglibrary.com" target="_blank" rel="nofollow" class="mr-2"><i
                  class="fa fa-linkedin p-2"></i></a>

                <a href="http://www.reddit.com/submit?url=https://speakinglibrary.com&title=The Speaking Library" target="_blank" rel="nofollow"><i
                  class="fa fa-reddit p-2"></i></a>
              </div>
              <p className="self-end text-xs font-sans text-right mt-auto tracking-wider leading-relaxed">If a library could only tell<br /> the books it had read</p>
            </div>
          </header>

          <section className="mt-24">
            <div className="prose">
              <h2 className="font-serif">About</h2>
              <p>The Speaking Library is an effort with which we're collecting a high quality and freely available collection of audio books for you to enjoy.</p>
            </div>
          </section>

          <section className="bg-teal-200 font-medium -mx-13 my-24 px-13 py-6 shadow-lg">
            <h2 class="text-xl font-bold mb-1 text-blue-800">Do you want to read more?</h2>
            <h2 class="text-lg font-bold text-blue-500">Sign up and receive a new audio book each week</h2>
            
            <form class="mt-12 sm:flex" aria-labelledby="newsletter-headline" method="post" action="https://listmonk.whaally.com/subscription/form">
              <input type="hidden" name="l" value="6b5ff21c-3cf6-4ebc-965b-ad6316c64ef9" />
              <input aria-label="Email address" type="email" name="email" required class="appearance-none w-full px-4 py-2 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-teal-300 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Enter your email" />
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <input class="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" type="submit" value="I want to listen to new audio books!"/>
              </div>
            </form>
          </section>

          <footer class="text-xs text-center">
            The Speaking Library is a project by <a href="https://corstianboerman.com/whaally.html">🐳 <span className="underline">Whaally</span></a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
