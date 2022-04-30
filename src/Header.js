import { Profile } from "./Profile"

export const Header = () => {
    return (
        <div className="flex place-content-between mb-5">
            <div>
                <h1 className="text-3xl font-bold">Tachometer</h1>
                <p>Measure your task-completion velocity.</p>
            </div>
            <Profile />
        </div>
    )
}