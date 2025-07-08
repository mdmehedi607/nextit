import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

function Dialogebox({isDialogeOpen, setIsDialogeOpen}) {
  return (
        <Dialog open={isDialogeOpen} onOpenChange={setIsDialogeOpen}>
  <DialogContent>
    <DialogHeader className='flex flex-col gap-10'>
      <DialogTitle className='text-2xl text-gray-800 font-bold text-center'>Register</DialogTitle>
    </DialogHeader>
     <div className="p-3 md:p-10">
         <form className=" flex flex-col justify-baseline items-center gap-4">
           <div className="flex justify-baseline flex-col  gap-1 w-full">
            <Label htmlFor='name' className='text-lg'>Name:</Label>
            <Input type='text' id='name' placeholder='Type Your Full Name' required className='bg-gray-100'/>
           </div>
            <div className="flex justify-baseline flex-col  gap-1 w-full">
            <Label htmlFor='name' className='text-lg'>Email:</Label>
            <Input type='email' id='name' placeholder='Type Your Email Address' required className='bg-gray-100'/>
           </div>
            <div className="flex justify-baseline flex-col  gap-1 w-full">
            <Label htmlFor='name' className='text-lg'>Phone:</Label>
            <Input type='number' id='name' placeholder='Type Your Phone Number' required className='bg-gray-100'/>
           </div>
            <div className="flex justify-baseline flex-col  gap-1 w-full">
            <Button type='submit'>Register</Button>
           </div>
         </form>

        </div>
  </DialogContent>
</Dialog>
  )
}

export default Dialogebox