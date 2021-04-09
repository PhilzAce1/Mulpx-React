import React, { Component } from 'react';
import '../assets/css/Activity.css';

export class Activity extends Component {
    render() {
        return (
            <div className="container">
                <div className="row row-cols-1 m-2">
                    <div className="col-4 p-3 box4">
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="logo-bg2 pt-2 pb-3 mb-4 px-2 rounded">
                            <img
                            alt=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAE8UlEQVRYhe2YaaiWRRTHf3P1uqZ+KCPFQkpJTfNmRYiU5lraQi6hJvXBPiiUBUEhqEkW3XLB9pJohYpEUxTTXMBoIwkzs0w09y0Ll2sZpf76MHPp8fG9975XX+1LB16e9znnPzP/Oc/MOWcG/pf/5b+VcCaN1IuAPsClqY+NwIoQwl8l5AbUk6DaCXgS6AesBn4GTgLXEck+FEJYrJYBvYEKoBGwDVgaQjhcQu6nECtTJ6u/qI+oLQpgblT3qLPULeoa9Xm1Uv1I3afedy7INVEXqKvUtnVge6mvqDvU99VmGVtndav6qjqkVOQuUFeqb6oN69Gumfq2+m5O31kdr36nzq1Pn4UGaaAuUd9Qi1qrar9q7yTP71I7ZPtMz4bqUvXhsyHYWp2jrlcb14BpoXZRR6uL1E3qD+qLalBfV8em//3Ub9Xlalv1BnXtGRPMkJivjsu890+ePaBWJUIL1HvVpmpzdYM6Rn1K3ab+qq5VR6pTkr2V+kcpCD6YPFmmvpUIjVFb19JmoPpZ8uRz6iU5+zJ1nHqkrvGLWaS7iTHtAeAy4NoQwrE62nwJdAN2AR+GEPbl7AuB24EDpSB4ELgQGA+MLoIcIYQqtSXQnhik83KIGMS31tVXWREENxO9cQWwvgh8VjoDO2uwtaEw+VOkGIIDgO3A5hDCcQB1hNouC1LbqSMyqh+BLcCQAvY/gTnALaUgeJJYDHTP6CYCPXO4nklfLd0TydPsIYT5wGtAfm3WX9T2KY9OrBt9SruJqV37Arbh6u/qo2dNMHU4SD1SU8AugG+iHlYH1WCfoD5dEnKZTr9Sry4SW6GursW+RL2jmL6KWYPVshgYXST2HmBZIYPaD+gEfFyPseuWlJt3qN3qwHVXj1qgNEtpcq/au6TkMgPcqm5Xb6rB3kfdqS5Ok6lUu6XUuFI9oT52TshlSFSqf6d8er/aMj0/UY+rzyRc11Qs7EwVzF0pl89Qp6vr1EPJ29+rs9WupSA4VX1CHWAs5Y+mimdA0k+toV158uJ+dVLaSM3T75qk26u+oDY6E2IVaea7ayEx1VikVmZ3vNrIWKDOtcB5JoNrqc5TV1STrHUXG6vqUernwAJiilpBzafBAKwETgCL1NXqcOBZoAq4O4RQlem/POutEMIRYARwGJhRGzfUwcbab7V6p/+W632MReiVOXyntIH6ZCY3zHi625/3nLGqnqW+pLbJ2Vqlz31VIWLl6svq5loywbD0qeenRT8/vQ8tgJ2lTsrpOqYN8oX6jfqbenkOM0Wd1TCnDMQkfjHQI7n8NAkhzFNXAbcBbYF1wNgQwsEC8IHEwJ2Vm4E9QCXQHCgH8mtzEfBOfrYDjYekpoWInYkYc3j+83ZK+h3qe2r3Au1aqEfym+R6YGEI4Zg6OgHP6gk0AMwOEkLYSCxmFxEr66/VwTkuAU7fxeXA8epJlOi5DeiYHSRtpApivp4GfEC8jMpKB2B7yDWcCvQihpJSyShgXghhWmacvsSD0xpiQVwBDA0hfJrBPA60zBPsD/QvITmIt1sjgc7Z2y3jTdkE4lebHkLYlLG1An4C+paYS2Exno/nGq/lsvpTAnXSlaUUOvu8kEuDNjZejcxN3qkJ1yrF1OVq+XkjmAZvoM403iFONtaNzVI46ZEC8z5jVXN+yeWIdjVWLBuMB6eqFHtnql3y+H8Aqs4GAPKxxFwAAAAASUVORK5CYII="
                            />
                        </div>
                        <div>
                            <strong>Salary Payment</strong>
                            <br/>
                            <small>12 of 12 people sent</small>
                        </div>
                        <div>
                            <strong>&#8358;200,000</strong>
                            <br/>
                            <small> Total payment</small>
                            <br/>
                            <small>Today</small>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Activity
