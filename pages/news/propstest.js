export default function Propstest ({value}) {
    return (
        <div>
            {value}
        </div>
    );

}

export async function getServerSideProps() {
    return {
        props: {
            value: 'Hello, world!'
            },
        };
}