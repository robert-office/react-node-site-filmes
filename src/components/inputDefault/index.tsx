type props = {
    label : string;
    type?: string;
    placeholder?: string;
    required? : boolean
}

export const inputDefault = ( props: props ) => {
    return (
        <>
            <div className="relative">
                <label className="font-medium text-gray-900 dark:text-gray-50">{ props.label }</label>
                <input
                    type={ props.type ? props.type : "text" }
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder={ props.placeholder ? props.placeholder : "insira suas informações aqui" }
                    required={ props.required ? props.required : false }
                />
            </div>
        </>
    );
}