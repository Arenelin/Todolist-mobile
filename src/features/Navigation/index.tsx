import {TodolistList} from "features/todolistsList";
import {Login} from "features/login";
import {useMeQuery} from "services";
import {ResponseResultCodes} from "types";
import {Loader, ScreenTitle} from "common/components";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()
export const Navigation = () => {
    const {data, isSuccess, isLoading} = useMeQuery()
    const isAuth = isSuccess && data.resultCode === ResponseResultCodes.Success

    if (isLoading) {
        return <Loader/>
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={() => ({
                headerTitle: ({children}) => <ScreenTitle title={children}/>,
                headerStyle: {
                    backgroundColor: '#94a1b2',
                }
            })}>
                    {isAuth
                        ?
                        <>
                            <Stack.Screen name="todolist-list" component={TodolistList}/>
                        </>
                        :
                        <>
                            <Stack.Screen name="Login" component={Login}/>
                        </>
                    }
            </Stack.Navigator>
        </NavigationContainer>
    );
};
