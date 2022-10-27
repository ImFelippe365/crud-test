import Item from "./../../components/Item";
import Header from './../../components/Header/index';

import { api } from "./../../services/api";
import { useState, useEffect } from 'react';

import { IoAddCircleOutline } from 'react-icons/io5'
import { useForm } from "react-hook-form";
import { AddButton, ClientsList, ErrorMessage, FieldContainer, Input, Label, ItensEmpty } from "./styles";

interface ClientsProps {
    id: number,
    name: string
}

interface ClientSubmitProps {
    name: string
}

export default function Home() {


    const { register, handleSubmit, reset, formState: { errors } } = useForm<ClientSubmitProps>();
    const onSubmit = (data: ClientSubmitProps) => handleAddClient(data);

    const [clients, setClients] = useState<ClientsProps[]>([]);

    const getClients = async () => {
        try {
            const { data } = await api.get('/clientes')

            setClients(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddClient = async (formData: ClientSubmitProps) => {
        try {
            await api.post(`/clientes`, formData)
            reset();
            getClients();
        } catch (error) {
            console.log(error)
        }
    }

    const deleteClient = async (id: number) => {
        try {
            await api.delete(`/clientes/${id}`)

            getClients();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getClients();
    }, [])

    return (
        <>
            <Header />
            <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Nome do cliente:</Label>
                    <FieldContainer>
                        <Input
                            type={'text'}
                            placeholder="Nos diga seu nome completo"
                            {...register("name", { required: true })}
                        />


                        <AddButton role={'button'} type="submit">
                            <IoAddCircleOutline className="addButtonIcon" />
                            Adicionar
                        </AddButton>
                    </FieldContainer>

                    {errors.name && <ErrorMessage>Esse campo precisa ser preenchido antes</ErrorMessage>}
                </form>

                <ClientsList>
                    <Label>Lista de clientes:</Label>
                    {
                        clients.map((client) =>
                            <Item
                                key={client.id}
                                id={client.id}
                                name={client.name}
                                handleDeleteClient={() => deleteClient(client.id)}
                                handleUpdateList={getClients}
                            />
                        )
                    }
                    {
                        clients.length === 0 &&
                        <ItensEmpty>
                            Nenhum cliente foi cadastrado
                        </ItensEmpty>
                    }
                </ClientsList>
            </main>
        </>
    );
}

