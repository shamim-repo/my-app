
export default async function ServerComp() {

    const jsonData = await fetch('https://dummyjson.com/test')
    const data= await jsonData.json()
    console.log(data)

    return (
        <>
            <div>ServerComp</div>
            <div>{JSON.stringify(data)}</div>
        </>
    )
}
