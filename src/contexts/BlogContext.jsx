import { createContext, useState, useEffect } from 'react';

const BlogContext = createContext({});

const BlogContextProvider = ({children}) => {
	// const [error, setError] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [blogData, setBlogData] = useState({});
	const getpostData = async () => {
		const response = await fetch('/data.json')
		const json = await (response.json());
		setBlogData(json);
		setLoaded(true);
	};
	useEffect(()=> {
		getpostData();
	}, []);

	return ( 
		<>
		{loaded ? 
			<BlogContext.Provider value={{blogData}}>
				{children}
			</BlogContext.Provider>
			:
			null
		}
		</>
	)
}

export {BlogContext, BlogContextProvider};