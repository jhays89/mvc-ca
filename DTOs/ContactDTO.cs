using ContactApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContactApp.DTOs
{
    public class ContactDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Telephone { get; set; }
        public string EmailAddress { get; set; }
        public DateTime? BestTimeToCall { get; set; }

        public Contact CreateContact(ContactDTO contactDTO)
        {
            var contact = new Contact();

            contact.FirstName = contactDTO.FirstName;
            contact.LastName = contactDTO.LastName;
            contact.Telephone = contactDTO.Telephone;
            contact.EmailAddress = contactDTO.EmailAddress;
            contact.BestTimeToCall = contactDTO.BestTimeToCall;

            return contact;
        }
    }
}