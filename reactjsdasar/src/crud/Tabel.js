import React from 'react'
import {Table} from 'react-bootstrap'

const Tabel = ({minumans, editData, hapusData}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Minuman</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {minumans.map ((minuman, index) => {
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{minuman.nama}</td>
                            <td>{minuman.deskripsi}</td>
                            <td>Rp. {minuman.harga}</td>
                            <td>
                                <button className="btn btn-warning mr=2" 
                                onClick={() => 
                                editData(minuman.id)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger" 
                                onClick={() => 
                                hapusData(minuman.id)}>
                                    Hapus
                                </button>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    };

export default Tabel;