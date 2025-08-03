
export const ParentComponent = () => {
    const name = "Indroneel"
    return (
        <>
            <h1>Hello</h1>
            <ChildComponent data={name} />
        </>
    )
}

const ChildComponent = (props) => {
    return (
        <>
            <h1>Hi</h1>
            <GrandChildComponent data={props.data} />
        </>
    )
}

const GrandChildComponent = (props) => {
    return (
        <>
            <h1>See you</h1>
            <GreatGrandChildComponent data={props.data} />
        </>
    )
}

const GreatGrandChildComponent = (props) => {
    return (
        <>
            <h1>Bye</h1>
            <h1>{props.data}</h1>
        </>
    )
}

//This is props drilling!!!