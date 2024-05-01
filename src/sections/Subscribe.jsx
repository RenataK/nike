// import Button from "../components/Button"
// // import { useState } from "react"

// const Subscribe = () => {
//   // const [email, setEmail] = useState('');
// 	// const [subscribed, setSubscribed] = useState(false);

// 	// const handleEmailChange = (event) => {
// 	// 	setEmail(event.target.value);
// 	// };
		
// 	// const handleSubscribe = () => {
// 	// 	// if (email) {
// 	// 	// setSubscribed(true);
// 	// 	// }
// 	// 	const emailRegex = /^\S+@\S+\.\S+$/;
// 	// 	if (emailRegex.test(email)) {
// 	// 		setSubscribed(true);
// 	// 	} else {
// 	// 		alert('Please Enter a Valid Email')
// 	// 	}
// 	// };

//   return (
//     <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
//       <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold"> Sign Up for
//       <span className="text-coral-red"> Updates </span> & Newsletter
//       </h3>
      
//       {/* {subscribed ? (
//         <p style={{color: 'pink', fontFamily:'sans-serif'}}>Check your email for further instructions!</p>
//       ) : ( */}
//         <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
//         <input type="text" placeholder="youremail@nike.com" className="input" />

//         <div className="flex max-sm:justify-end items-center max-sm:w-full">
//           <Button label="Sign Up" fullWidth />
//         </div>
//       </div>
//       {/* )} */}
//     </section>
//   )
// }

// export default Subscribe





// import Button from "../components/Button"
import { useState } from "react"

const Subscribe = () => {
  const [email, setEmail] = useState('');
	const [subscribed, setSubscribed] = useState(false);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
		
	const handleSubscribe = () => {
		// if (email) {
		// setSubscribed(true);
		// }
		const emailRegex = /^\S+@\S+\.\S+$/;
		if (emailRegex.test(email)) {
			setSubscribed(true);
		} else {
			alert('Please Enter a Valid Email')
		}
	};

  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      {subscribed ? (
      <h3 className="max-container text-3xl font-semibold font-montserrat text-coral-red text-center">You are now subscribed to our Newsletter!</h3>
    ) : (
      <>
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold"> Sign Up for
      <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="youremail@nike.com" className="input" onChange={handleEmailChange} />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          {/* <Button label="Sign Up" fullWidth onClick={handleSubscribe} /> */}
          <button 
            type='button' 
            onClick={handleSubscribe}
            className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full w-full bg-coral-red"
          >Sign up</button>
        </div>
      </div>
      </>
      )}
    </section>
  )
}

export default Subscribe