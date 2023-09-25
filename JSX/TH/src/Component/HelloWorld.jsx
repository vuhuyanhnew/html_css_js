function HelloWorld() {
    let name = "Huy"
    const human = {
        name: "Anh",
        age: 10,
    }
    const formatName = () =>{
        return human.name + " ||  " + human.age
    }
    return (
        <>
            <div>HelloWorld</div>
            <div>Hello {name}, {formatName()}</div>

        </>
    );
}
export default HelloWorld