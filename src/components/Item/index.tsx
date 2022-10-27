import { useState } from 'react'

import { ItemContainer } from "./styles"
import { CgTrash } from 'react-icons/cg'
import { MdOutlineDone } from 'react-icons/md'
import { TbEdit } from 'react-icons/tb'
import { api } from '../../services/api'

interface ItemProps {
    id: number,
    name: string,
    handleDeleteClient: () => void,
    handleUpdateList: () => void,
}

export default function Item({ id, name, handleDeleteClient, handleUpdateList }: ItemProps) {

    const [isEditing, setIsEditing] = useState(false);
    const [clientName, setClientName] = useState(name);

    const handleToggleIsEditing = () => {
        setIsEditing(!isEditing)
    }


    const handleSaveChanges = async () => {
        handleToggleIsEditing()

        if (name !== clientName) {
            try {
                await api.put('/clientes', { id, name: clientName });

                handleUpdateList();
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <ItemContainer>
            {
                isEditing ?
                    <input
                        type={'text'}
                        value={clientName}
                        onChange={(({ target }) => setClientName(target.value))}
                    /> :
                    <label>{name}</label>
            }
            <section>
                <CgTrash onClick={handleDeleteClient} role={'button'} className="deleteIcon" />
                {
                    isEditing ? <MdOutlineDone onClick={handleSaveChanges} role={'button'} className="editIcon" />
                        : <TbEdit onClick={handleToggleIsEditing} role={'button'} className="editIcon" />
                }
            </section>
        </ItemContainer>
    )

}