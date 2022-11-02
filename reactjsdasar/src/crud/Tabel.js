import React from 'react'
import {Table} from 'react-bootstrap'

const Tabel = ({minumans}) => {
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
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{minuman.nama}</td>
                                    <td>{minuman.deskripsi}</td>
                                    <td>Rp. {minuman.harga}</td>
                                    <td></td>
                                </tr>
                            );
                        })}
                    </tbody>
            </Table>
        );
    }

export default Tabel