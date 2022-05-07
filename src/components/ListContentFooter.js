import { useDispatch, useSelector } from "react-redux"
import "./Listcontentfooter.css"
import { setTodoFilter } from "../store/action/todoActions"
import { act } from "react-dom/test-utils"
const ListContentFooter = () => {
    const { todoFilter, todoList } = useSelector((state) => state.todo)
    const dispatch = useDispatch();
    return (
        <div className="content-footer">
            <div className="left-item">
                {todoList.filter((x) => !x.complete).length + " kaldı"}
            </div>
            <div className={`menu-item ${todoFilter === "all" ? "active" :""}`} onClick={() => {
                dispatch(setTodoFilter("all"))
            }
            }>
                tümü
            </div>
            <div className={`menu-item ${todoFilter === "complete"? "active":""}`}
                onClick={() => {
                    dispatch(setTodoFilter("complete"))
                }
                }
            >
                Tamamlanan
            </div>

        </div>
    )

}
export default ListContentFooter