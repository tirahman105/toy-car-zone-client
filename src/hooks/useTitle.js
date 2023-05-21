import { useEffect } from "react"

const useTitle = title => {
    useEffect(() =>{
        document.title = `${title} -Toy-Car-Zone`;
    }, [title])
};

export default useTitle;