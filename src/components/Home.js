import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row m-2 mt-3 align-items-start">
          <div className="col">
            <strong className="header">Account Connected</strong>
          </div>
        </div>
        <div className="row mx-2 mt-1 d-flex justify-content-between align-items-center">
          <div className="col-4 ml-3 my-4 pt-4 box">
            <div className="d-flex justify-content-between mb-3">
              <i className="fas fa-2x fa-university"></i>
              <span>4122</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <strong className="amount">&#8358;44,349</strong>
            </div>
          </div>
          <div className="col-4 mx-2 my-4 pt-4 box">
            <div className="d-flex justify-content-between mb-3">
              <img
                src="https://img.icons8.com/color/32/000000/mastercard-logo.png"
                alt="logo"
              />
              <span>1234</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <strong className="amount">&#8358;64,343</strong>
            </div>
          </div>
          <div className="col-2 mr-2 my-4 pt-4 box2">
            <div className="align-items-center">
              <i className="fas fa-2x fa-plus-circle mb-2"></i>
              <strong>Add</strong>
            </div>
          </div>
        </div>
        <div className="row mx-2 mt-1">
          <div className="col mx-2 p-3 box3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo-bg py-4 px-2 rounded">
                <img
                  src="https://img.icons8.com/fluent-systems-filled/30/000000/select-cell.png"
                  alt="logo"
                />
              </div>
              <div className="ml-2">
                <strong>Multiple Pay</strong>
                <p className="space">Send payments to many people at a go.!</p>
              </div>
              <button
                type="button"
                className="btn rounded-pill button align-items-start"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="row mx-2 mt-3">
          <div className="col">
            <strong className="header">Group Payment</strong>
          </div>
        </div>

        {/* Some hot fixes */}

        <div className="d-flex flex-row flex-nowrap">
          <div className="col-4 text-center">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAEZklEQVRYheWY229UVRSHv7XPTC8w0xIEorEgoiAm2EQunZYomUKE8OADYIMGkWgUlPhiDPII/4Bg1AQfNJCQGAxCTNQYA21PCdCZ6kQDKuGSlBA0XoudGUrpdPbyoaX0DNPDTDttE/w9nex1+85eZydrH/g/qTpat7Q6Wre0lDlNqRKFGyNbrZjTVkx7OFq/E5BS5B1zkpnRaOim9H6ssNGbWb8IlrOl65t4ciz5xwRYtSIyXwNyBOWJ/B56Xg3r083xX0ZbY9QtDq+sf1YdOkaGA5DHxEosFI08N9o6TtERTU1O1f1Vu1D2gVQWEFEuIk1lD9dM75v76HEuX7bFlCuqxeFVdfepdT4VdHUxccPUZo1uvN4c/6PQgIIBq1fWL7bKEWDuqNBu66qoNiXdeKwQ54JaXNXY8JLCUWDmmNAG0yGyuWLug6mbl3+N383ZfwfXri0P9177AHitBGD5yh8Mh/pe/+3LRM+IHiMZKlcsmx1wnM+BunFhG5QKPzj9dkP3iY7OfPa8gKFVkUaxcgiYNZ5ww/SPIJuSre3f5hpyv0EJR+t3CnIACE8MGwBTgE3l82oq+7ZcbcFFh4BuPUxfG6nK9Mp+YP0EguWRfG0yzubukyevwSBgONqwEKNHUR6fXLghXbJGN1xvjp+RKU8vecAJBC8CFsgA0ycZrgsIAibbn5lvekKzukTZq1kiQN6TNMHq1CwRUfb2hGZ1eU5xqLE+IbB4ssgGlUi1xoaGXu80I6UZMkupsUzUCuwBnlKxqwT2Af3AVZO18wJOZpoxuhpom0jA30X5CKUVEFF6Uq2xU+mWjpZka2y7iL4C1FjHrLt2PNHd3Rw/lkpmngE9MRi/H/hzPAA7VXk+lczMSbqxN1JubKUIh1TYWRmN1NxySrbEDzKwY2+xezB3IpGBwFbAKtqZ0oqHUHkVKGjk8gAa1Tu+QYHDFVpRm3Zjnw0UG5CK3QUEA2Je8AQoB4Caqe7y2ltLqdZT54F2Qdbgur0pt/0TNLNI4HhRgHnUkZyRevEv103nGlLNHReAS6g2DF+3mB8BROw8z4sqZ4FHhuLdxN/lWrEO8L2veAAV8eygiLzH4Z/7Rgw2ut04um/42vXo6TPA22Ks53BYy/si+s7wtYEXl3f9AAN+RlW94mfvbo4fu2NxNzZFbE/ucvpE7Bxw7g5/k72IHbmRvi0WkSf97KWQqlnkZ88F9LTYqu4IrV4+bjNhOLpkhig7/Hz8dxDmSMa2TV3R4HP3HZ1C0eWLkGAb8LCfn/cbFOT2qDikhcbR78ONkf2qzodp9/RPYwUTyb4J9mWg7G7+vodkmMpAtonYbeHG+gsK34lyVgxnrGavOFnpwZb9233jRhqgurIyhOmblnV0itHAbBWtVagVWAZ2QTHXcS+gFhS5QGABAqogOFgHcPoJB4MAWPoBgwAqAy0Z7RRSst9v46UcQLmnxq0JUc7AqkX9eRoXKR4GzyFRZbcgayaWKEdGv5rU+vec/gM4yoDQOK4k2QAAAABJRU5ErkJggg=="
            />
            <br />
            <strong style={{ fontSize: '13px' }}>Bakery Staff</strong>
            <br />
            <p className="">
              <small> 11 people</small>
            </p>
          </div>
          <div className="col-4 text-center">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAENklEQVRYhe2WTWxUVRiGn+/emXaGzkwV1BoDUdlJNCpQZ8amzR3aiDagiW5cKAujiYZE8YeoCSsTF0aDyRgSowGjRhcoGCH4Q6QdWcxUCkTRhTGSaAipKIQyM+3Uztz7uWhRqPeeO9CCiem7PO933u/Juefcc2Be8/pvJbNOcJxISv7sVbgfNANcA8Q9V7rH9pe+n228PZvJ7bn0iqjl7gY2AreBHEc4ANwuFitjNy6pLbql42jlp5H6xfa46BVsczJ9lvAZUEX1ZZv41tFCYRQg4aRfF5EN0y1GsOSByr5i6bIBtvd1LvVc+zDIKVu1d7Qw9MvMmkR399XY9VUi5IFYw3Vvru0fPjbngO19nUvVsx/xoF+UxSANVA8irPHUWj5WKH5rnO/csdITawjlMMIYsAy4QuHN6uDQU7MCTDjp9SLyKhD3mbqnMlhaE9YAIJnL7AH6ZwxPIrznNSRvOkxWkJHKZdeJyBv+cIDqR83ATUl2+Ay2oDxq2Trc5mT6Lgjwqq6upKKbMaywJ57x055Xq3LYYLfawjYcJ9I04ESrdzewyNQ04lJuFhDqv5lchSUJa7zHz/P/xJ4uC2vpYsWaYgPU9UIPo6XWrb7j/tW4IXmniVmnwtGmZNvUgZOmGg3Y676AohwJCfu8urf4e7OAlcKhk8DXphpRfm0aUFVbjGFwQ7Nw54ReZ7RFq37jvoCWiDEMyCadbFP/QIDkqsxaRDKmGg3oGbAHrbB7UxDdSTbr/488V9lsHGUHIZeC7XnDTQOW9xWHUXktpHU02crqML5kzLsLiJpqFPJnCgcONg0I0PAa+am5Bok+j3llBGSjMQM0ItbmIDMQsLZ/+BjCuyHhmZSTfjLITObSjwFdpgCB7aMDRd8TbAQEUKx3QgBRrGuDPTrC5rvI2ybfDKhq3DsAIt5ksEfoSzoinvFVHwjY1pvusNEXwhqAGG4UkzclT+Xp1OrswsCEmQOJnsxNYssG0IcJemqdlTK8oGU8d2LvkTFfP5uNJ1v5EtHuEM6qwjZbrPyZgeJRX8CpZ3wkD9rvBz5DDYG3yhPyHKVSzVjpOJGE1F4U5FmgPSTXE/i4LvJMbaB0/G/AhJN+EJGtAgtCAlyQD0V5qVwo/RxSe54W3pNO1WvyBMIGIPBgTauM8FBlYGi3pHrv7FTPKwK+D8ZpKbATlU2VQunHCwH7l7LZeCqmjytsAgL3HjChLssl6WR2Iaw1FP4hKuvKhdIXswKboXhP55KIbW8HDHe0vC/JXKYMJP1shXHUSlcLxR/mEu6sruxb0d5wo98B1weUHLeAkeAIeeVSwQGc/urQGSAf5Cuc8D2tyVzmXuBTRdfb8M2lAgRwIS3IFuC+yuDQrpm+78FQdLEgCLLFu5R0/PM/U3Sxn+8LGLUbHzQa0XHE/LKeM6lMRiONTy5Lr3nN6/+mvwA4OlmhN5cPVAAAAABJRU5ErkJggg=="
            />
            <br />
            <strong style={{ fontSize: '13px' }}>Bakery Staff</strong>
            <br />
            <p className="">
              <small> 11 people</small>
            </p>
          </div>
          <div className="col-4 text-center">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAEN0lEQVRYhdWXXWhbZRjHf89Ju641J7VbdeiEbWwXwsYqq645rcOk+5AJjqnrQGEiioKIejFB9EJURB14pSj4wb7EiZQ5ipsbsx9h2I/Z9WajqOBFwV44Vy9MUsvS5n28SFPak5Mm56xm+L/JyfP5y3nf8+Y5AsCbWPaFaBfKTqAH5GRNxuqc6O9PcZMlAHa704pqv8v3Y6pvaNtNYFogCwDVxwo8Qn2lYbxkzX4+4naIoavCLJ6S+tjWe41Yw25HNitbqqq4W1U/AmZEOZhMDH1VaUDLiDzq5QiF9IiqfgqsBFapcNxud1oriwcWSMHyglwi9wDZC2IN71eIa15TuMNtVJGDqb6hJuC3BQ7R+yMxZ0OF2ACwFI67bFfTK1f3A6jIGZdPEJ4so67YMeeZcDw6YsejU3Y8+lckHv0mHL9vo2/AWl3+OjA2r3YXnZ1ZADV62p2g6AFmz8+icHHnGKJfCGwBlgMrFPZD6Kf67S07fQFeSyTSRnkWUABLzMm8c/K21AUg6cpZG45FHyhW0I45T5P7EYXkUGeMnGjY0Vz2GWsBTCaGulV4Q+HE36a2d87bOZpB5HxBo8WWWfT5Ej0bZ2aqO8oFrMpfpHuH3vGMMHoaYZ/Lum/Vrs0vXj1/edIjo+Q+U0s2lQtolQ6ZPgNkXUZ7arr2EN570Qt6gUS1ZExeJQFTiZEJYNBtV+QFuz16mI6O0ILm0FOqplravWSAuabyuXcnnrKv/f5d5EFnRd5kyL6t8M8i5c6ley72LSlgsm/wS8A9juUk7NaMXgrHojGAdN/waMjSvcCEF1xIlz9eLlyufJmq29l2Z2gm2w+sLRqknJKQ9V6yZ2C4YUdz/Yyp3q/KJkEn1eIHP3fONyBAJOZsUNF+4PYSVX/GcEyXWUfS5wf+9AsVGBDA3t7qqDHdAnVlhGeA04I5nGxccy7/D/WfAgLY8ege4FsgVCp2nsZQ3kolho766eWnwZwyY+O/1qxb/QfIwz7SbkXYW7PurlRmbLzg2CqmQHcwr3A8OjI7EPjRtFhWW7JnoGCK91JZx0wRiUCQ2bBajfm6sa3NLh16A4CRmLMeiARMX399mfmgnMDAgEZMU9DcnPS5cLtTcqoJDGjB5qC5eYnqJ3XbmgteOVx9gkklEKB7imm0qpYdZZGHNfhDonKP7xyRA8xO7nMmdFck1vJSsZRAgCt2t0SANT7TJlK9g6dU+djtUJFDt2xv8VyRQIDTGW3C5xkq6DhAurbhFeCyy11jGesEjlO7JICaFd/7T0XGATh79rqSfQKYckVsDNeYd5cEUER8HzFiGM9fp/uGR0X1NY+6L0fiLQ/Nt1W5g8rULyCf+UlQ0bPzvycTFz+MxKKNKrJwdBO2At8H5Kq8Ft3odiz6KkLZ77BLLuHK4kucg2uuDI2HlOYbmWYqov85oHClQhxF+/8LsF5JOGnpVhsAAAAASUVORK5CYII="
            />
            <br />
            <strong style={{ fontSize: '13px' }}>Bakery Staff</strong>
            <br />
            <p className="">
              <small> 11 people</small>
            </p>
          </div>
          <div className="col-4 text-center">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAAvUlEQVRYhe2YsQ3CMBRE76O0bJBB4hJmgEUYhEXIDFA6g2SDDPBpUtgpkPB9pAjdq+Lm9BQ3TwbEn2NRQ8fTcINZAgC45+U13SN2u4gRAIBZgvtl/Q6bPYQt/QgJskiQRYIsEmSRIIsEWarsqJLpW9wHAP16mmE2Ne5UqVbnVplMHH3zzibVdn/F9R90z82xGXjF5TEu+c/pURT1uDzzNWJ391csQRYJskiQRYIsEmSRIEvc+2CZaptkEuIDbxC9L+5fxTqcAAAAAElFTkSuQmCC"
            />
            <br />
            <strong style={{ fontSize: '13px' }}>Bakery Staff</strong>
            <br />
            <p className="">
              <small> 11 people</small>
            </p>
          </div>
        </div>

        {/* !some hot fixes */}
        <div className="row mx-2 mt-2 d-flex justify-content-between align-items-center">
          <div className="col-2 ml-3 mt-3 circle d-flex justify-content-center align-items-center">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAEZklEQVRYheWY229UVRSHv7XPTC8w0xIEorEgoiAm2EQunZYomUKE8OADYIMGkWgUlPhiDPII/4Bg1AQfNJCQGAxCTNQYA21PCdCZ6kQDKuGSlBA0XoudGUrpdPbyoaX0DNPDTDttE/w9nex1+85eZydrH/g/qTpat7Q6Wre0lDlNqRKFGyNbrZjTVkx7OFq/E5BS5B1zkpnRaOim9H6ssNGbWb8IlrOl65t4ciz5xwRYtSIyXwNyBOWJ/B56Xg3r083xX0ZbY9QtDq+sf1YdOkaGA5DHxEosFI08N9o6TtERTU1O1f1Vu1D2gVQWEFEuIk1lD9dM75v76HEuX7bFlCuqxeFVdfepdT4VdHUxccPUZo1uvN4c/6PQgIIBq1fWL7bKEWDuqNBu66qoNiXdeKwQ54JaXNXY8JLCUWDmmNAG0yGyuWLug6mbl3+N383ZfwfXri0P9177AHitBGD5yh8Mh/pe/+3LRM+IHiMZKlcsmx1wnM+BunFhG5QKPzj9dkP3iY7OfPa8gKFVkUaxcgiYNZ5ww/SPIJuSre3f5hpyv0EJR+t3CnIACE8MGwBTgE3l82oq+7ZcbcFFh4BuPUxfG6nK9Mp+YP0EguWRfG0yzubukyevwSBgONqwEKNHUR6fXLghXbJGN1xvjp+RKU8vecAJBC8CFsgA0ycZrgsIAibbn5lvekKzukTZq1kiQN6TNMHq1CwRUfb2hGZ1eU5xqLE+IbB4ssgGlUi1xoaGXu80I6UZMkupsUzUCuwBnlKxqwT2Af3AVZO18wJOZpoxuhpom0jA30X5CKUVEFF6Uq2xU+mWjpZka2y7iL4C1FjHrLt2PNHd3Rw/lkpmngE9MRi/H/hzPAA7VXk+lczMSbqxN1JubKUIh1TYWRmN1NxySrbEDzKwY2+xezB3IpGBwFbAKtqZ0oqHUHkVKGjk8gAa1Tu+QYHDFVpRm3Zjnw0UG5CK3QUEA2Je8AQoB4Caqe7y2ltLqdZT54F2Qdbgur0pt/0TNLNI4HhRgHnUkZyRevEv103nGlLNHReAS6g2DF+3mB8BROw8z4sqZ4FHhuLdxN/lWrEO8L2veAAV8eygiLzH4Z/7Rgw2ut04um/42vXo6TPA22Ks53BYy/si+s7wtYEXl3f9AAN+RlW94mfvbo4fu2NxNzZFbE/ucvpE7Bxw7g5/k72IHbmRvi0WkSf97KWQqlnkZ88F9LTYqu4IrV4+bjNhOLpkhig7/Hz8dxDmSMa2TV3R4HP3HZ1C0eWLkGAb8LCfn/cbFOT2qDikhcbR78ONkf2qzodp9/RPYwUTyb4J9mWg7G7+vodkmMpAtonYbeHG+gsK34lyVgxnrGavOFnpwZb9233jRhqgurIyhOmblnV0itHAbBWtVagVWAZ2QTHXcS+gFhS5QGABAqogOFgHcPoJB4MAWPoBgwAqAy0Z7RRSst9v46UcQLmnxq0JUc7AqkX9eRoXKR4GzyFRZbcgayaWKEdGv5rU+vec/gM4yoDQOK4k2QAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="col-2 mx-2 mt-3 circle d-flex justify-content-center align-items-center">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAENklEQVRYhe2WTWxUVRiGn+/emXaGzkwV1BoDUdlJNCpQZ8amzR3aiDagiW5cKAujiYZE8YeoCSsTF0aDyRgSowGjRhcoGCH4Q6QdWcxUCkTRhTGSaAipKIQyM+3Uztz7uWhRqPeeO9CCiem7PO933u/Juefcc2Be8/pvJbNOcJxISv7sVbgfNANcA8Q9V7rH9pe+n228PZvJ7bn0iqjl7gY2AreBHEc4ANwuFitjNy6pLbql42jlp5H6xfa46BVsczJ9lvAZUEX1ZZv41tFCYRQg4aRfF5EN0y1GsOSByr5i6bIBtvd1LvVc+zDIKVu1d7Qw9MvMmkR399XY9VUi5IFYw3Vvru0fPjbngO19nUvVsx/xoF+UxSANVA8irPHUWj5WKH5rnO/csdITawjlMMIYsAy4QuHN6uDQU7MCTDjp9SLyKhD3mbqnMlhaE9YAIJnL7AH6ZwxPIrznNSRvOkxWkJHKZdeJyBv+cIDqR83ATUl2+Ay2oDxq2Trc5mT6Lgjwqq6upKKbMaywJ57x055Xq3LYYLfawjYcJ9I04ESrdzewyNQ04lJuFhDqv5lchSUJa7zHz/P/xJ4uC2vpYsWaYgPU9UIPo6XWrb7j/tW4IXmniVmnwtGmZNvUgZOmGg3Y676AohwJCfu8urf4e7OAlcKhk8DXphpRfm0aUFVbjGFwQ7Nw54ReZ7RFq37jvoCWiDEMyCadbFP/QIDkqsxaRDKmGg3oGbAHrbB7UxDdSTbr/488V9lsHGUHIZeC7XnDTQOW9xWHUXktpHU02crqML5kzLsLiJpqFPJnCgcONg0I0PAa+am5Bok+j3llBGSjMQM0ItbmIDMQsLZ/+BjCuyHhmZSTfjLITObSjwFdpgCB7aMDRd8TbAQEUKx3QgBRrGuDPTrC5rvI2ybfDKhq3DsAIt5ksEfoSzoinvFVHwjY1pvusNEXwhqAGG4UkzclT+Xp1OrswsCEmQOJnsxNYssG0IcJemqdlTK8oGU8d2LvkTFfP5uNJ1v5EtHuEM6qwjZbrPyZgeJRX8CpZ3wkD9rvBz5DDYG3yhPyHKVSzVjpOJGE1F4U5FmgPSTXE/i4LvJMbaB0/G/AhJN+EJGtAgtCAlyQD0V5qVwo/RxSe54W3pNO1WvyBMIGIPBgTauM8FBlYGi3pHrv7FTPKwK+D8ZpKbATlU2VQunHCwH7l7LZeCqmjytsAgL3HjChLssl6WR2Iaw1FP4hKuvKhdIXswKboXhP55KIbW8HDHe0vC/JXKYMJP1shXHUSlcLxR/mEu6sruxb0d5wo98B1weUHLeAkeAIeeVSwQGc/urQGSAf5Cuc8D2tyVzmXuBTRdfb8M2lAgRwIS3IFuC+yuDQrpm+78FQdLEgCLLFu5R0/PM/U3Sxn+8LGLUbHzQa0XHE/LKeM6lMRiONTy5Lr3nN6/+mvwA4OlmhN5cPVAAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="col-2 mx-2 mt-3 circle d-flex justify-content-center align-items-center">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAEN0lEQVRYhdWXXWhbZRjHf89Ju641J7VbdeiEbWwXwsYqq645rcOk+5AJjqnrQGEiioKIejFB9EJURB14pSj4wb7EiZQ5ipsbsx9h2I/Z9WajqOBFwV44Vy9MUsvS5n28SFPak5Mm56xm+L/JyfP5y3nf8+Y5AsCbWPaFaBfKTqAH5GRNxuqc6O9PcZMlAHa704pqv8v3Y6pvaNtNYFogCwDVxwo8Qn2lYbxkzX4+4naIoavCLJ6S+tjWe41Yw25HNitbqqq4W1U/AmZEOZhMDH1VaUDLiDzq5QiF9IiqfgqsBFapcNxud1oriwcWSMHyglwi9wDZC2IN71eIa15TuMNtVJGDqb6hJuC3BQ7R+yMxZ0OF2ACwFI67bFfTK1f3A6jIGZdPEJ4so67YMeeZcDw6YsejU3Y8+lckHv0mHL9vo2/AWl3+OjA2r3YXnZ1ZADV62p2g6AFmz8+icHHnGKJfCGwBlgMrFPZD6Kf67S07fQFeSyTSRnkWUABLzMm8c/K21AUg6cpZG45FHyhW0I45T5P7EYXkUGeMnGjY0Vz2GWsBTCaGulV4Q+HE36a2d87bOZpB5HxBo8WWWfT5Ej0bZ2aqO8oFrMpfpHuH3vGMMHoaYZ/Lum/Vrs0vXj1/edIjo+Q+U0s2lQtolQ6ZPgNkXUZ7arr2EN570Qt6gUS1ZExeJQFTiZEJYNBtV+QFuz16mI6O0ILm0FOqplravWSAuabyuXcnnrKv/f5d5EFnRd5kyL6t8M8i5c6ley72LSlgsm/wS8A9juUk7NaMXgrHojGAdN/waMjSvcCEF1xIlz9eLlyufJmq29l2Z2gm2w+sLRqknJKQ9V6yZ2C4YUdz/Yyp3q/KJkEn1eIHP3fONyBAJOZsUNF+4PYSVX/GcEyXWUfS5wf+9AsVGBDA3t7qqDHdAnVlhGeA04I5nGxccy7/D/WfAgLY8ege4FsgVCp2nsZQ3kolho766eWnwZwyY+O/1qxb/QfIwz7SbkXYW7PurlRmbLzg2CqmQHcwr3A8OjI7EPjRtFhWW7JnoGCK91JZx0wRiUCQ2bBajfm6sa3NLh16A4CRmLMeiARMX399mfmgnMDAgEZMU9DcnPS5cLtTcqoJDGjB5qC5eYnqJ3XbmgteOVx9gkklEKB7imm0qpYdZZGHNfhDonKP7xyRA8xO7nMmdFck1vJSsZRAgCt2t0SANT7TJlK9g6dU+djtUJFDt2xv8VyRQIDTGW3C5xkq6DhAurbhFeCyy11jGesEjlO7JICaFd/7T0XGATh79rqSfQKYckVsDNeYd5cEUER8HzFiGM9fp/uGR0X1NY+6L0fiLQ/Nt1W5g8rULyCf+UlQ0bPzvycTFz+MxKKNKrJwdBO2At8H5Kq8Ft3odiz6KkLZ77BLLuHK4kucg2uuDI2HlOYbmWYqov85oHClQhxF+/8LsF5JOGnpVhsAAAAASUVORK5CYII="
            />
          </div>
          <div className="col-2 mr-3 mt-3 circle d-flex justify-content-center align-items-center">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAAvUlEQVRYhe2YsQ3CMBRE76O0bJBB4hJmgEUYhEXIDFA6g2SDDPBpUtgpkPB9pAjdq+Lm9BQ3TwbEn2NRQ8fTcINZAgC45+U13SN2u4gRAIBZgvtl/Q6bPYQt/QgJskiQRYIsEmSRIIsEWarsqJLpW9wHAP16mmE2Ne5UqVbnVplMHH3zzibVdn/F9R90z82xGXjF5TEu+c/pURT1uDzzNWJ391csQRYJskiQRYIsEmSRIEvc+2CZaptkEuIDbxC9L+5fxTqcAAAAAElFTkSuQmCC"
            />
          </div>
        </div>
        <div className="row mx-2 d-flex justify-content-between">
          <div className="col-3 px-0 align-items-center">
            <strong>Bakery Staff</strong>
            <p className="space"> 11 people</p>
          </div>
          <div className="col-3 px-1">
            <strong>Home Staff</strong>
            <p className="space">3 people</p>
          </div>
          <div className="col-3 px-0">
            <strong>Site Workers</strong>
            <p className="space">25 people</p>
          </div>
          <div className="col-3 px-1">
            <strong>Create New Group</strong>
          </div>
        </div>
        <div className="row mx-2 mt-3">
          <div className="col d-flex justify-content-between">
            <strong className="header">Transaction History</strong>
            <Link to="#">
              <strong className="header underline">See all</strong>
            </Link>
          </div>
        </div>
        <div className="row row-cols-1 mx-2 my-3">
          <div className="col mb-2 p-3 box4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo-bg2 pt-2 pb-3 mb-4 px-2 rounded">
                <img
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAE8UlEQVRYhe2YaaiWRRTHf3P1uqZ+KCPFQkpJTfNmRYiU5lraQi6hJvXBPiiUBUEhqEkW3XLB9pJohYpEUxTTXMBoIwkzs0w09y0Ll2sZpf76MHPp8fG9975XX+1LB16e9znnPzP/Oc/MOWcG/pf/5b+VcCaN1IuAPsClqY+NwIoQwl8l5AbUk6DaCXgS6AesBn4GTgLXEck+FEJYrJYBvYEKoBGwDVgaQjhcQu6nECtTJ6u/qI+oLQpgblT3qLPULeoa9Xm1Uv1I3afedy7INVEXqKvUtnVge6mvqDvU99VmGVtndav6qjqkVOQuUFeqb6oN69Gumfq2+m5O31kdr36nzq1Pn4UGaaAuUd9Qi1qrar9q7yTP71I7ZPtMz4bqUvXhsyHYWp2jrlcb14BpoXZRR6uL1E3qD+qLalBfV8em//3Ub9Xlalv1BnXtGRPMkJivjsu890+ePaBWJUIL1HvVpmpzdYM6Rn1K3ab+qq5VR6pTkr2V+kcpCD6YPFmmvpUIjVFb19JmoPpZ8uRz6iU5+zJ1nHqkrvGLWaS7iTHtAeAy4NoQwrE62nwJdAN2AR+GEPbl7AuB24EDpSB4ELgQGA+MLoIcIYQqtSXQnhik83KIGMS31tVXWREENxO9cQWwvgh8VjoDO2uwtaEw+VOkGIIDgO3A5hDCcQB1hNouC1LbqSMyqh+BLcCQAvY/gTnALaUgeJJYDHTP6CYCPXO4nklfLd0TydPsIYT5wGtAfm3WX9T2KY9OrBt9SruJqV37Arbh6u/qo2dNMHU4SD1SU8AugG+iHlYH1WCfoD5dEnKZTr9Sry4SW6GursW+RL2jmL6KWYPVshgYXST2HmBZIYPaD+gEfFyPseuWlJt3qN3qwHVXj1qgNEtpcq/au6TkMgPcqm5Xb6rB3kfdqS5Ok6lUu6XUuFI9oT52TshlSFSqf6d8er/aMj0/UY+rzyRc11Qs7EwVzF0pl89Qp6vr1EPJ29+rs9WupSA4VX1CHWAs5Y+mimdA0k+toV158uJ+dVLaSM3T75qk26u+oDY6E2IVaea7ayEx1VikVmZ3vNrIWKDOtcB5JoNrqc5TV1STrHUXG6vqUernwAJiilpBzafBAKwETgCL1NXqcOBZoAq4O4RQlem/POutEMIRYARwGJhRGzfUwcbab7V6p/+W632MReiVOXyntIH6ZCY3zHi625/3nLGqnqW+pLbJ2Vqlz31VIWLl6svq5loywbD0qeenRT8/vQ8tgJ2lTsrpOqYN8oX6jfqbenkOM0Wd1TCnDMQkfjHQI7n8NAkhzFNXAbcBbYF1wNgQwsEC8IHEwJ2Vm4E9QCXQHCgH8mtzEfBOfrYDjYekpoWInYkYc3j+83ZK+h3qe2r3Au1aqEfym+R6YGEI4Zg6OgHP6gk0AMwOEkLYSCxmFxEr66/VwTkuAU7fxeXA8epJlOi5DeiYHSRtpApivp4GfEC8jMpKB2B7yDWcCvQihpJSyShgXghhWmacvsSD0xpiQVwBDA0hfJrBPA60zBPsD/QvITmIt1sjgc7Z2y3jTdkE4lebHkLYlLG1An4C+paYS2Exno/nGq/lsvpTAnXSlaUUOvu8kEuDNjZejcxN3qkJ1yrF1OVq+XkjmAZvoM403iFONtaNzVI46ZEC8z5jVXN+yeWIdjVWLBuMB6eqFHtnql3y+H8Aqs4GAPKxxFwAAAAASUVORK5CYII="
                />
              </div>
              <div>
                <strong>Salary Payment</strong>
                <p className="space">12 of 12 people sent</p>
              </div>
              <div>
                <strong>&#8358;200,000</strong>
                <p className="space mb-2"> Total payment</p>
                <p>Today</p>
              </div>
            </div>
          </div>
          <div className="col mb-2 p-3 box4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo-bg2 pt-2 pb-3 mb-4 px-2 rounded">
                <img
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAENElEQVRYhe2YXYhVZRSGn6WjiY6VJlk6ScpYaST5izhWljaZkCWREUSF0s+MpJWGqRVlhBIYWBd2UeJFoBkW0U2KFVR64WCZgZKQXWQgXtoYpIxPF/sbOG7P2fvM8XZeGDhn/bzrPd/37fWtPdCPfvSjEFFPkDoQeAi4EehJeU3AoYjoKsm9HbgbuFhRsxvYHRHnG9R9SYHJ6hr1piq+e9UlNfIGqy+p7WrkfKPU9eqgKxV3q7q8JGau+qI6pMIW6mvqNQV5I9QX1KmNigt1TZ2xzWpnxfcnqq14jdxV6uBa/gEFuXOBfSXkEwEiohu4WLGVoyLir7K8hD3Ag40InBwRR3PEk9QdaqvaCryqDlGfAa4GOtTngaa0fcNS3uD0fW2i2qSOTD/uFHBDLRFNBQLzB3seMAnYD/wJvA4cBjqBjyPibC5+KLBK3QasBL4EWtRHgfeAJcAnveEFOqojHfxQl6qd6lPJvlmdqd6sLivhGKluVGerT6aV7vUNUmelGoUPYi3ymeoD6suVxBX+1fn2UcC1uoa9TV2g3lkrt+gMzgeeBbojYkeOuAX4IyLM2Qeq16bP91W4ulLDzuO2VGNhIwKHAJ8Cu6r4ZgEHc+KmAluA+eoY4JWK9nEcuKUKz2fAzlSrzwIPAzMi4p8qvmbgXBI2XL0HmA58B3wLtJOtTFuK7waG5UlSe5qRavUNqfn+oo6t4rtLnarOU7f1nlH1aXVRRVyrOkW9Q51dhWdMqtHcZ4GJ4O1qd606VN2irlSnl3BMSU/+ZduoLlHfKsov2mLIelenmo9bCLQCwyOibHseSbGLKo2JszPVaExgRBwBuoD1OddZ4EREvFsijojYSNbYz+ZcG4CuiPi1jKMQqXVsV9/vPStpEjlYllvBcVAdkT43J67tZnNmIYquOgAiokddARwAHk+tYxhwWn0sIj4vEbcUOA0sV88B54F5wJyI6Cn9dWVQJ6pfqOty9nb1gzryP1Tvz9k2qHtyU01V1FxBdTLwBnA9sBkYpXaQje47gXHAXHVCRJyswTGBrBceV8cDR8jO/QngEPCRegZ4JyKOlYmtJF6h/qC2lcTNUA/0jk4538jkK2tDbanWinrFTVP3Wuf7QrrsD6ctj/TXnmzz6+QYpO5Tp+V91bZ4MbA1Ii7UQ052vQ0ATgHPJduPyfZ9PQQRcUHdCjwM/FwmcDTZ2Wop4d0PjAXeBH4n64vHANKtcRLYq24E/gYWlPCNB0ZcJj5vUBeTPRT/lhBeBRwFNpENAwvIVu0bsjHqN+A6YB0wBfivhG8osDYivi6JK4bakc5oaYuoyJmYcjquqHgdhVrUn9TSBl8ltynllh2dS9DXQnOAr4BxauWW1Xwry+FI4thdb8GyaSaPZrL/zTSKHqoMrkWo66WnF+poYDvZk94ITgPLIuJMg/n96Ec/8vgf5dv27nTNwCgAAAAASUVORK5CYII="
                />
              </div>
              <div>
                <strong>Siblings Allowance</strong>
                <p className="space">4 of 4 people sent</p>
              </div>
              <div>
                <strong>&#8358;40,000</strong>
                <p className="space mb-2"> Total payment</p>
                <p>Yesterday</p>
              </div>
            </div>
          </div>
          <div className="col mb-2 p-3 box4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo-bg2 pt-2 pb-3 mb-4 px-2 rounded">
                <img
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAACoklEQVRYhdWXO2gUURSG/1mDIppERARtTbegiA8woCgkFgpCEAsVohhNG7AJgnVAsPABghYqAYsgCiIbe6OVCSrxBYrbpDBEQQNhEzF+Fjuj482d9+ys/s3OnMc93973SJKAEvAQmAcqwCmgVf+KgE6WaqzZXJJUcn8PW3ztRYIEyQPssfgeFAkSKGC7ZXgBtgJHgc/AJ+B4swCHAgBfALO+90WgsxmAby1wz4CXFvvjZgB+tYDscX3vDftPoKNIvpKkYcM2Lemp+1wxfI6k3qhGAQfoAyaAGvAFGAHKiQmB1UDV10vXfb4uS+9WAScCbtiSBzAHdKeB7HKHD2C/z74c+GYptDekrb4AOE8zQPI9FjgP3AFaDPtdS5GbIe2MRwACnE4MGFLwhKXALLAqIL4WA/BS3Pql6BBVJC0atlZJF7DPxbkYbcaJiS9gLKAnbgHLjNiRGD24L2/A3pBio8BaX2yZ+moN0qNc4dyiDvAkpOhHfCsb6Ka+WpfAAWtyB3SLbuTv/dKm+8AON74dOANcpn7e5zusAZAdwHQEJMAbYBBY33AoC+QuwueYXwvAPeAgxmJqNOQh4EdMSE9V4GSRkP0JAT2dLRJyIgXgd9yF1Gg4B/tFIo4+EPOzNs5RF6RNktoy5F6ME5gFcEuGXEnqB45EBWUB3Jwh19M1YENYQNGA5i1mnaTbhNzQU4voY8+mHv7c3P0ayBuuLaBQmGbc3KsW3zyQx5T5Dbg7IRzAczd3BfZv7lfASrNW2jmY5t9OSZLjOAuSjkmqGf6ypCEzKS1gmi1myntwHOe1pHOWmAHggN/QYgmKo3eSbiTMMW/SV1RfxeaVbKek0ZRcxSt0/wEGJUXu9g3UZBTguKRtBcFYleUkKUT/PeBkIRQh9X8Bs1upKJxdnLcAAAAASUVORK5CYII="
                />
              </div>
              <div>
                <strong>Site Worker</strong>
                <p className="space">25 of 25 people sent</p>
              </div>
              <div>
                <strong>&#8358;400,000</strong>
                <p className="space mb-2"> Total payment</p>
                <p>Feb 26</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
