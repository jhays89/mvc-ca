using System;
using System.ComponentModel.DataAnnotations;

namespace ContactApp.Models
{
    public class Contact
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(40)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(40)]
        public string LastName { get; set; }
        [MaxLength(16)]
        public string Telephone { get; set; }
        [Required]
        [MaxLength(80)]
        [DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }
        public DateTime? BestTimeToCall { get; set; }
    }
}