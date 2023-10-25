import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContent } from "../redux/reducers/content"

export default function Homepages() {
    const dispatch = useDispatch()
    const storeContents = useSelector((state) => state.content.contents)
    const storeIsLoading = useSelector((state) => state.content.isLoading)
    const storeError = useSelector((state) => state.content.error)
    const storeName = useSelector((state) => state.content.name)
    
    // useEffect(() => {
    //     console.log(fetchContent)
    //     console.log(storeContents)
    // }, [])

    useEffect(() => {
        dispatch(fetchContent())
    }, [])

    console.log(storeContents)

    useEffect(() => {

    }, [])

    if (storeIsLoading) {
        return(
            <>
                <section>
                    <h1>Loading...</h1>
                    <h4>{ storeName }</h4>
                </section>
            </>
        )
    }

    if (storeError) {
        return storeError
    }

    return(
        <>
            <span>Homepages Here..</span>
        </>
    )
}