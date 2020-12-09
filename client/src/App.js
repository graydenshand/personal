import 'styles/tailwind.generated.css';

function App() {
  return (
  	/* Flex Container */
    <div className="h-screen flex justify-center items-center px-5" style={{backgroundImage: "url('nature.jpg')"}}>
    	{/* Main Content box */}
    	<div className="bg-white w-full max-w-lg md:max-w-screen-md mx-auto shadow rounded-xl z-20">
    		<div className="flex flex-col md:flex-row">
    			<img className="w-full h-48 sm:h-56 md:w-36 md:h-64 rounded-t-xl rounded-b-none md:rounded-t-none md:rounded-l-xl object-cover" src="/team_grayden.jpg" alt="Me" />
    			<div className="px-5 py-3 flex flex-col justify-between">
            <div>
      				<p className="text-gray-800 text-sm tracking-6 leading-5 mb-2">Hey there &#128075;</p>
    					<p className="text-gray-800 text-sm tracking-6 leading-5 mb-2">I'm Grayden&mdash;I write software and live in Shelburne, VT. </p>
    					<p className="text-gray-800 text-sm tracking-6 leading-5 mb-2">Currently, I'm the technical lead for <a href="https://akimbo.com" target="_blank" className="text-indigo-800 font-bold hover:text-indigo-600">akimbo.com</a>, working with a small and talented team to build a new model for online learning.</p>
    					<p className="text-gray-800 text-sm tracking-6 leading-5 mb-2">Also, check out this <a href="https://timedbrainstorm.com" target="_blank" className="text-indigo-800 font-bold hover:text-indigo-600" >free brainstorm app</a> I recently built, it's a simple tool for generating ideas collaboratively (and anonymously) with your team.</p>
    				</div>
            <div>
              <p className="text-xs text-center md:text-left uppercase font-bold text-gray-400 mt-2 tracking-wide">&mdash; Contact &mdash;</p>
      				<p className="mt-2 flex text-indigo-800 items-center justify-center md:justify-start">	
      					<a className="hover:text-indigo-600" href="mailto:graydenshand@gmail.com">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </a>

                <a href="https://github.com/graydenshand/" className="ml-2 hover:text-indigo-600">
      						{/* Icons from Font Awesome */}
      						<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
      					</a>

      					<a className="ml-2 hover:text-indigo-600" href="https://www.linkedin.com/in/gshand/">
      						<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
      					</a>
      				</p>

      			</div>
          </div>
    		</div>
    	</div>
      <div className="absolute w-full h-screen opacity-50 bg-blue-800 z-10"></div>
    </div> // Flex Container
  );
}

export default App;
