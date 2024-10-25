// 'use client'

// import { useState } from 'react'
// import {
//   Button,
//   TextField,
//   CircularProgress,
//   Card,
//   CardContent,
//   CardHeader,
//   Typography,
// } from '@mui/material'
// import { CheckCircle } from '@mui/icons-material'

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     setIsSubmitting(true)
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSubmitted(true)
//       // Reset form after 2 seconds
//       setTimeout(() => setIsSubmitted(false), 2000)
//     }, 1000)
//   }

//   return (
//     <Card sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
//       <CardHeader
//         title={
//           <Typography variant="h5" component="div" align="center">
//             Contact Us
//           </Typography>
//         }
//       />
//       <CardContent>
//         <form  onSubmit={handleSubmit} noValidate>
//           <TextField
//             id="name"
//             label="Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             id="email"
//             label="Email"
//             type="email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             id="message"
//             label="Your message"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             required
//             multiline
//             rows={4}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             disabled={isSubmitting || isSubmitted}
//             sx={{ mt: 2 }}
//           >
//             {isSubmitting ? (
//               <CircularProgress size={24} />
//             ) : isSubmitted ? (
//               <CheckCircle />
//             ) : (
//               'Send'
//             )}
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }

// export default Contact



'use client'

import { useState } from 'react'
import {
  Button,
  TextField,
  CircularProgress,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after 2 seconds
      setTimeout(() => setIsSubmitted(false), 2000)
    }, 1000)
  }

  return (
    <Card
      sx={{ 
        maxWidth: 400, 
        mx: 'auto', 
        mt: 4, 
        borderRadius: '16px', // Fully rounded corners
        overflow: 'hidden'    // Ensure child elements adhere to rounded corners
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" component="div" align="center">
            Contact Us
          </Typography>
        }
        sx={{ borderBottom: '1px solid #ddd' }} // Optional: to separate header
      />
      <CardContent>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={{ borderRadius: '8px' }} // Rounded corners for the text fields
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={{ borderRadius: '8px' }} // Rounded corners for the text fields
          />
          <TextField
            id="message"
            label="Your message"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            multiline
            rows={4}
            sx={{ borderRadius: '8px' }} // Rounded corners for the text fields
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting || isSubmitted}
            sx={{ 
              mt: 2, 
              borderRadius: '8px'  // Rounded corners for the button
            }}
          >
            {isSubmitting ? (
              <CircularProgress size={24} />
            ) : isSubmitted ? (
              <CheckCircle />
            ) : (
              'Send'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default Contact

