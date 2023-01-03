export default function Account() {
    return (
      <div class="bg-white min-h-screen font-raleway pt-2 shadow-sm my-16">
        <div class="container mx-auto">
            <div class="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 class="text-2xl text-gray-900">Account Setting</h2>
                <form class="mt-6 border-t border-gray-400 pt-4">
                    <div class='flex flex-wrap -mx-3 mb-6'>
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='text-label' for='grid-text-1'>email address</label>
                            <input class='text-box' id='grid-text-1' type='text' placeholder='Enter email'  required/>
                        </div>
                        <div class='w-full md:w-full px-3 mb-6 '>
                            <label class='text-label'>password</label>
                            <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">change your password</button>
                        </div>
                        <div class="personal w-full border-t border-gray-400 pt-4">
                            <h2 class="text-2xl text-gray-900">Personal info:</h2>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                    <input class='text-box' type='text'  required/>
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required/>
                                </div>
                            </div>
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required/>
                            </div>
                            <div class="flex justify-end">
                                <button class="appearance-none bg-red-500 text-white px-2 py-1 shadow-sm border rounded-md mr-3 sm-3" type="submit">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
  }
  