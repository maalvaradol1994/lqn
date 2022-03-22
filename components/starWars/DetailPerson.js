
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export const DetailPerson = ({ person, open, handleClose }) => {

    return (
        <>
        
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h3" component="h2">
                    Name: { person.name }
                </Typography>
                <Typography id="modal-modal-description" variant="h5" sx={{ mt: 3 }}>
                    Birth year: { person.birth_year }<br />
                    Created: { person.created }<br />
                    Edited: { person.edited }<br />
                    Eye Color: { person.eye_color }<br />
                    Gender: { person.gender }<br />
                    Hair Color: { person.hair_color }<br />
                    Height: { person.height }<br />
                    Mass: { person.mass }<br />
                    Name: { person.name }<br />
                    Skin Color: { person.skin_color }<br />
                </Typography>
            </Box>
            </Modal>  

        </>
    )
}