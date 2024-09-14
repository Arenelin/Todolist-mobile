import {Loader} from "common/components";
import {FlatList} from "react-native";
import {Task} from "./Task";
import {useGetTasksQuery} from "services";

type Props = {
    todolistId: string
}

export const TasksList = ({todolistId}: Props) => {
    const {data, isLoading} = useGetTasksQuery({todolistId})

    return (
        <>
            {isLoading
                ? <Loader/>
                : <FlatList
                    data={data.items}
                    renderItem={({item}) => <Task item={item} todolistId={todolistId}/>}
                    keyExtractor={item => item.id}
                />
            }
        </>
    );
};
