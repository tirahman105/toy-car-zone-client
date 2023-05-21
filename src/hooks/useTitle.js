import { useEffect } from "react"

const useTitle = title => {
    useEffect(() =>{
        document.title = `Toy-Car-Zone | ${title}`;
    }, [title])
};

export default useTitle;