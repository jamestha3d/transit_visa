type GreetProps = {
    name: string
    version: number
}

const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2> Frontend for {props.name} {props.version} connected and working!</h2>
        </div>
    )
}

export default Greet;