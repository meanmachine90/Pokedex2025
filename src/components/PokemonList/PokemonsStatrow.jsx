export const PokemonStatRow = ({ stat }) => {
    const { name } = stat.stat;
    const { base_stat } = stat;

    const barColor = base_stat < 60 ? 'bg-yellow-400' : 'bg-green-400';
    const progress = Math.min(base_stat, 100)

    return (
        <tr className="stats_tr">
            <th scope="row " width="10%">
                {name}
            </th>
            <td >
                <div className="barcontainer" width="100%">
                    <div
                        className={`${barColor} bar`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </td>
            <td className="px-6 py-4" width="10%">
                {base_stat}
            </td>
        </tr>
    );
};