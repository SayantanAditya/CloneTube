interface HomeLayoutprops {
    children: React.ReactNode
}

export const HomeLayout = ( { children } : HomeLayoutprops) => {
 return (
    <div>
        <div className="p-4 bg-blue-500">
            <p>Home Navbar</p>
        </div>
        {children}
    </div>
 )
}

