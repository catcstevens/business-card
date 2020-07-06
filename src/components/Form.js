// import React from 'react'

// const Form = (props) => {
//     const {name, surname, email, phone, address} = props
//     const sectionStyles = {
//         display: "grid",
//         width: "50vw",
//         gridTemplateColumns: "1fr 1fr",
//         padding: ".5em"
//     }
//     const headingStyles = {
//         color: "gray"
//     }
//     const itemStyles = {
//         marginRight: "1em",
//         marginBottom: ".5em",
//         width: "25vw"
//     }
//     const hrStyles = {
//         color: "gray",
//         width: "50vw",
//         margin: "0"
//     }

//     function onPersonalDetailsChange(event) {
//         props.onChangePersonal(event.target.name, event.target.value)
//     }

//     function onAddressChange(event) {
//         props.onChangeAddress(event.target.name, event.target.value)
//     }

//     return (
//         <form >
//             <div style={headingStyles}>PERSONAL DETAILS</div>
//             <hr style={hrStyles} />
//             <div style={sectionStyles}>

//                 <div style={itemStyles}>
//                     <div>
//                         <label>GIVEN NAME</label>
//                     </div>
//                     <div>
//                         <input name="name" type="text" value={name} onChange={onPersonalDetailsChange} />
//                     </div>
//                 </div>
//                 <div style={itemStyles}>
//                     <div>
//                         <label>SURNAME</label>
//                     </div>
//                     <div>
//                         <input name="surname" type="text" value={surname} onChange={onPersonalDetailsChange} />
//                     </div>
//                 </div>
//                 <div style={itemStyles}>
//                     <div>
//                         <label>EMAIL</label>
//                     </div>
//                     <div>
//                         <input name="email" type="email" value={email} onChange={onPersonalDetailsChange} />
//                     </div>
//                 </div>
//                 <div style={itemStyles}>
//                     <div>
//                         <label>PHONE</label>
//                     </div>
//                     <div>
//                         <input name="phone" type="phone" value={phone} onChange={onPersonalDetailsChange} />
//                     </div>
//                 </div>
//             </div>
//             <div style={headingStyles}>ADDRESS</div>
//             <hr style={hrStyles} />
//             <div style={sectionStyles}>
//                 <div style={itemStyles}>
//                     <div>
//                         <label>HOUSE NAME OR #</label>
//                     </div>
//                     <div>
//                         <input name="number" type="text" value={address.number} onChange={onAddressChange} />
//                     </div>
//                 </div>
//                 <div style={itemStyles}>
//                     <div>
//                         <label>STREET</label>
//                     </div>
//                     <div>
//                         <input name="street" type="text" value={address.street} onChange={onAddressChange} />
//                     </div>
//                 </div>
//                 <div style={itemStyles}>
//                     <div>
//                         <label>SUBURB</label>
//                     </div>
//                     <div>
//                         <input name="suburb" type="text" value={address.suburb} onChange={onAddressChange} />
//                     </div>
//                 </div>
//                 <div style={itemStyles}>
//                     <div>
//                         <label>STATE</label>
//                     </div>
//                     <div>
//                         <input name="state" type="text" value={address.state} onChange={onAddressChange} />
//                     </div>
//                 </div>
//                 <div style={itemStyles}>
//                     <div>
//                         <label>POSTCODE</label>
//                     </div>
//                     <div>
//                         <input name="postcode" type="text" value={address.postcode} onChange={onAddressChange} />
//                     </div>
//                 </div>
//                 <div style={itemStyles}>
//                     <div>
//                         <label>COUNTRY</label>
//                     </div>
//                     <div>
//                         <input name="country" type="text" value={address.country} onChange={onAddressChange} />
//                     </div>
//                 </div>
//             </div>
//         </form>

//     )
// }

// export default Form;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
