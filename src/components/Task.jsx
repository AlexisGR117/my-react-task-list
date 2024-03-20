import './Task.css'

export const Task = (props) => {
    const {name, state} = props;
    return (
        <li>
            <input type="checkbox" checked={state} className="checkbox-round"></input>
            <div className={state ? "checked" : ""}>{name}</div>
        </li>
    );
}