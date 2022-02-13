import Swal from 'sweetalert2'

export async function handleApiRequest(performRequest: Function): Promise<any> {
    try {
        return await performRequest();
    } catch (err: any) {
        await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.body.message}`,
        });
    }
}