interface ChildProps {
    name : string;
    fullName : string;
    fatherName : string;
}
const ChildComponent = ( {name, fullName, fatherName}:ChildProps) => {
    console.log({name, fullName, fatherName});
    return(
        <div className="text-center justify-center mb-7">
            <h1 className="text-3xl leading-10">{`Name: ${name}`}</h1>
            <h1 className="text-3xl leading-10">{`FULLNAME: ${fullName}`}</h1>
            <h1 className="text-3xl leading-10">{`FATHER'NAME: ${fatherName}`}</h1>

        </div>
    );
}

export default ChildComponent;