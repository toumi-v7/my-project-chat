export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-lx text-gray-700 dark:text-gray-800 ` + className}>
            {value ? value : children}
        </label>
    );
}
