import React, {Component} from 'react';
import ListMakanan from './../ListData/ListMakanan';

class MenuMakanan extends Component {
	constructor(props){
		super (props)
		this.state = {
			pesan : 0,
		}
		this.rubahPesanan = this.rubahPesanan.bind(this)
		this.pesanan = this.pesanan.bind(this)
	}

	rubahPesanan (e){
		e.preventDefault();
		var temp = this.state.pesan + 1;
		this.setState((state,props) => ({
			pesan : temp
		}));
	}

	pesanan(e){
		e.preventDefault()
		console.log(e.target.value)
	}

	render(){
		return(
			<div>
				<h3>Daftar Makanan Yang Kami Sediakan : </h3>
				<table>
					<tbody>
						<tr>
							<td>
								<ListMakanan dataUrl = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
								<center>
									<button onClick={(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
								</center>
							</td>
							<td>
								<ListMakanan dataUrl = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
								<button onClick = {(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
							</td>
							<td>
								<ListMakanan dataUrl = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
								<button onClick = {(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
							</td>
							<td>
								<ListMakanan dataUrl = "https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
								<button onClick = {(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
							</td>
							<td>
								<ListMakanan dataUrl = "https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"/>
								<button onClick = {(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
							</td>
						</tr>
					</tbody>
				</table>
				<br/>
				<input type="text" onChange={(e) => this.pesanan(e)}/>
				<h3>Pesanan Anda : {this.state.pesan}</h3>
			</div>
		);
	}
}

export default MenuMakanan;
