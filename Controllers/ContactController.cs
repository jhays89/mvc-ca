using ContactApp.DTOs;
using ContactApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using ContactApp.AppDbContext;
using System.Data.Entity.Validation;

namespace ContactApp.Controllers
{
    public class ContactController : Controller
    {
        [Route("Contact")]
        public ActionResult Index()
        {
            if (TempData["Errors"] != null)
            {
                ViewBag.Errors = TempData["Errors"].ToString();
            }

            ViewBag.Title = "Contact Form";
            return View();
        }

        [Route("Contact/Confirmation")]
        public ActionResult Confirmation()
        {
            ViewBag.Title = "Contact Confirmation";
            return View();
        }

        [HttpPost]
        [Route("Contact")]
        public ActionResult AddContactSubmission(ContactDTO contactDTO)
        {
            var contact = contactDTO.CreateContact(contactDTO);
            var isDateValid = IsContactDateValid(contact);

            if(isDateValid)
            {
                try
                {
                    using (var dbContext = new ApplicationDbContext())
                    {
                        dbContext.Contacts.Add(contact);
                        dbContext.SaveChanges();
                    }
                }
                catch (Exception ex)
                {
                    TempData["Errors"] = "There was an issue validating your informatin. Please try again";
                    return RedirectToAction("Index", "Contact");
                }

                return View("~/Views/Contact/Confirmation.cshtml");
            }

            TempData["Errors"] = "There was an issue validating your date. Please try again";
            return RedirectToAction("Index", "Contact");
        }

        #region Helpers
        private bool IsContactDateValid(Contact contact)
        {
            var isValid = true;

            if(contact.BestTimeToCall == null)
            {
                return isValid;
            }

            var date = contact.BestTimeToCall;
            var hours = date.GetValueOrDefault().Hour;
            var minutes = date.GetValueOrDefault().Minute;

            var areHoursValid = hours >= 9 && hours <= 18;
            var areMinutesValid = minutes % 15 == 0;
            isValid = areMinutesValid && areHoursValid;

            return isValid;
        }
        #endregion
    }
}