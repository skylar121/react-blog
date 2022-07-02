import { createContext, useState, useEffect } from 'react';

const BlogContext = createContext({});

const BlogContextProvider = ({children}) => {
	const [error, setError] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [blogData, setBlogData] = useState({});
	const getpostData = async () => {
		try {const response = await fetch('data.json');
		const json = await (response.json());
		setBlogData(json);
		setLoaded(true);
		} catch(error) {
			setError(true);
		}
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
			<p>로딩에 실패하였습니다. 경로를 다시 확인해주세요.</p>
		}
		</>
	)
}

export {BlogContext, BlogContextProvider};