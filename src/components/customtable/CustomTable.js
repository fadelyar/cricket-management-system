import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";


function CustomTable(props) {
	const { header, body, footer } = props
	return (
		<Table style={{ marginTop: 20 }} padding='none'>
			<TableHead style={{ background: 'lightgray' }}>
				<TableRow style={{ height: 20 }}>
					{
						header.map((cell, index) => {
							return (
								<TableCell key={cell} style={{
									fontWeight: 'bold',
								}}
								>
									{cell}
								</TableCell>
							)
						})
					}
				</TableRow>
			</TableHead>
			<TableBody>
				{
					body.map((status) => {
						return (
							<TableRow key={status.id}>
								{
									Object.values(status).map((cell, index) => {
										return (
											<TableCell key={index} height={35} style={{
												fontFamily: 'Inconsolata',
												fontWeight: 'bold'
											}}>
												{cell}
											</TableCell>
										)
									})
								}
							</TableRow>
						)
					})
				}
			</TableBody>
			{
				props.footer &&
				<TableFooter style={{ background: 'lightgray' }}>
					<TableRow>
						{
							footer.map((foot, index) => {
								return (
									<TableCell key={index} style={{
										fontWeight: 'bold',
										color: 'black',
									}}
										colSpan={index === 1 && 5}
									>
										{foot}
									</TableCell>
								)
							})
						}
					</TableRow>
				</TableFooter>
			}
		</Table>
	);
}

export default CustomTable;
