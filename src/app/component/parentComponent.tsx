import ChildComponent from "./childcomponent";

export default function ParentComponent () {
    const name = "Mahnoor";
    const fullName = "Mahnoor Ansari";
    const fatherName = "Naeem Ansari"

    return (
        <div className="mt-10">
            <ChildComponent name={name} fullName={fullName} fatherName={fatherName}/>
        </div>
    );
}