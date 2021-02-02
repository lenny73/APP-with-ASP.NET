using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UCmsApi.Data;
using UCmsApi.Models;

namespace UCmsApi.Controllers
{
    [Route("api/[controller]")]
    public class SidebarController : Controller
    {
        private readonly UCmsApiContext _context;

        public SidebarController(UCmsApiContext context)
        {
            _context = context;
        }

        // GET api/sidebar
        public IActionResult Get()
        {
            Sidebar sidebar = _context.Sidebar.FirstOrDefault();

            return Json(sidebar);
        }

        // PUT api/sidebar/edit
        [HttpPut("edit")]
        public IActionResult Edit([FromBody] Sidebar sidebar)
        {
            _context.Update(sidebar);
            _context.SaveChanges();

            return Json("ok");
        }


    }
}