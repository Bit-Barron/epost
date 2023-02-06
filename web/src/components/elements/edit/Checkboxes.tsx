interface checkboxProps {
  name: string;
}

const Checkboxes = ({ name }: checkboxProps) => {
  return (
    <div className='relative flex items-start mt-10'>
      <div className='flex items-center h-5'>
        <input
          type='checkbox'
          className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
        />
      </div>
      <div className='ml-3 text-sm'>
        <label className='font-medium text-gray-700'>
          yfsdf
        </label>
      </div>
    </div>
  );
};

export default Checkboxes;
