import ffi from 'ffi-napi';

// Подключаем libc
const libc = ffi.Library(null, {
	open: ['int', ['string', 'int']],
	ioctl: ['int', ['int', 'ulong', 'int']],
	write: ['int', ['int', 'pointer', 'int']],
	close: ['int', ['int']],
});

export default libc;
