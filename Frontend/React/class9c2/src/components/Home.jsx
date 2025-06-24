
function Home({ data }) {
    console.log("data ", data)

    return (
        <>
            {
                data?.length > 0 ? (data?.map((name, index) => {
                    return <div key={index}><p>{name}</p></div>
                })) : (<p>No name matching </p>)
            }
        </>
    )
}

export default Home