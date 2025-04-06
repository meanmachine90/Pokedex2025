export const PokemonDetailRow = ({ label, value }) => {
    return (
        <tr className="border-b border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                {label}
            </th>
            <td className="px-6 py-4">
                {value}
            </td>
        </tr>
    );
};