import { Confroom } from "./types";

type RoomProps = {
    item: Confroom;
    onRowClick: (id: string) => void;
    isExpanded: boolean;
}

function Room(props: RoomProps) {
    const handleClick = () => props.onRowClick(props.item.id)

    let status_image;
    if (props.item.status === "free") {
        status_image = "https://img.icons8.com/emoji/48/000000/green-circle-emoji.png"
    } else {
        status_image = "https://img.icons8.com/emoji/48/000000/red-circle-emoji.png"
    }
    const itemRows = [
        <tr onClick={handleClick} key={"row-data-" + props.item.id}>
            {/* if currentrow != colapsed -> arrow down */}
            <td className="thumbnail"><i className="arrow right"/></td>
            <td className="thumbnail"><img alt="Status Thumbnail" src={status_image}/></td>
            <td>{props.item.name}</td>
            <td>{props.item.uri}</td>
        </tr>
    ];

//    if (this.state.expandedRows.includes(props.item.id)) {
    if (props.isExpanded) {
        itemRows.push(
            <tr key={"row-expanded-" + props.item.id}>
                <td colSpan={4}>
                    {props.item.id}<br/>
                    {props.item.callId}<br/>
                </td>
            </tr>
        );
    }

    return <>{itemRows}</>;
}

export default Room;
