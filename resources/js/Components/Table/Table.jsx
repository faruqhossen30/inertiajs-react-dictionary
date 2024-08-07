export default function Table(props) {
    return (
        <table className="lg:max-w-max lg:min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            {props.children}
        </table>
    )
}
